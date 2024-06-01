import { Text, View } from "@lightningjs/solid";
import { createSignal, For, createResource, Match, Switch } from "solid-js";
import { Column } from "@lightningjs/solid-ui";

import { useParams } from "@solidjs/router";

import { default as ItemRow } from "../components/Row/ItemRow";

/*  let rowData = [
  {
    y: 0,
    data: [
      { title: "A1", description: "A1 description", color: 0xff0000ff },
      { title: "A2", description: "A2 description", color: 0x00ff00ff },
      { title: "A3", description: "A3 description", color: 0x0000ffff },
      { title: "A4", description: "A4 description", color: 0xffff00ff },
      { title: "A5", description: "A5 description", color: 0xff00ffff },
    ],
  },
  {
    y: 280,
    data: [
      { title: "B1", description: "B1 description", color: 0xff0000ff },
      { title: "B2", description: "B2 description", color: 0x00ff00ff },
      { title: "B3", description: "B3 description", color: 0x0000ffff },
      { title: "B4", description: "B4 description", color: 0xffff00ff },
      { title: "B5", description: "B5 description", color: 0xff00ffff },
    ],
  },
  {
    y: 560,
    data: [
      { title: "C1", description: "C1 description", color: 0xff0000ff },
      { title: "C2", description: "C2 description", color: 0x00ff00ff },
      { title: "C3", description: "C3 description", color: 0x0000ffff },
      { title: "C4", description: "C4 description", color: 0xffff00ff },
      { title: "C5", description: "C5 description", color: 0xff00ffff },
    ],
  },
 ]; 
 */

const fetchMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDc2YmI4MjhlYzM3ZTQzZTgyOGE3NWI0ZWQ4YTBkNyIsInN1YiI6IjVlNGZhZDE2OWI4NjE2MDAxODZjNmY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xlaXnemAXqIlF6dnxmbiMBK8A9DbSFbfcCNH3BV3nWY",
    },
  };

  let movies = await fetch(url, options);
  
  movies = movies.json;
  let data = [{y:0, data: [] }, { y:280 ,data: [] }, { y:560, data: [] }];

  let counter = 0;
  for (let i = 0; i < 15; ++i) {
    if (i % 5 == 0 && i != 0) {
      counter++;
    }
    
    let result = movies.results[i];
    data[counter].data.push({
      title: result.original_title,
      backdrop: "https://image.tmdb.org/t/p/original" + result.backdrop_path,
      image: "https://image.tmdb.org/t/p/w500" + result.poster_path,
    });
  }
  return data;
};

function HelloWorld() {
  // const [rows, setRows] = createSignal([...rowData]);
  const [title, setTitle] = createSignal("");

  const [backdrop, setBackdrop] = createSignal("");
  setBackdrop(
    "https://image.tmdb.org/t/p/original/z121dSTR7PY9KxKuvwiIFSYW8cf.jpg"
  );
  const [rowData] = createResource(fetchMovies);

  const params = useParams();

  // console.log(params.show);
  // console.log(params.episode);

  return
    <View width={1920} height={1080} src={backdrop()}>
      <Text x={190} fontSize={80}>{title()}</Text>
      <Switch>
        <Match when={rowData()}>
          <Column autofocus y={720} x={190}>
            <For each={rowData}>
              {(row, i) => 
                <ItemRow
                  rowIndex={i}
                  row={row}
                  numRows={rowData().length}
                  setTitle={setTitle}
                  setBackDrop={setBackDrop}
                  key={i} />
                  }</For>
          </Column>
        </Match>
      </Switch>
    </View>
};

export default HelloWorld;

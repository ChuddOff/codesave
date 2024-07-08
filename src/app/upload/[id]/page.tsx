import "./style.css";
import AppEditor from "@/components/editor/Editor";

interface BodyCode {
  code: {
    _id: string;
    name: string;
    description: string;
    show: boolean;
    author: string;
    html: string;
    css: string;
    js: string;
  };
  status: number;
}

interface Props {
  params: {
    id: string;
  };
}

async function getData(id: string) {
  const url = process.env.URL;
  console.log(`${url}/api/code?_id=${id}&author=chuddoff`);

  const response = await fetch(`${url}/api/code?_id=${id}&author=chuddoff`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export default async function Home({ params: { id } }: Props) {
  const data: BodyCode = await getData(id);

  console.log(data.code);

  return (
    <>
      <AppEditor
        htmlp={data.code.html}
        cssp={data.code.css}
        jsp={data.code.js}
        namep={data.code.name}
        descriptionp={data.code.description}
      />
    </>
  );
}

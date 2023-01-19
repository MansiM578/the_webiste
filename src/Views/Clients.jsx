import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Clients() {
  return (
    <>
      <Header />
      <div className="max-w-[1240px] p-2 mx-auto my-10">
        <h1 className="text-4xl">Our Clients</h1>
        <h1 className="text-2xl py-2">Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          odio nisi iste laboriosam labore aliquam id magni repellendus enim
          earum reprehenderit totam, praesentium sunt aut nesciunt iure maxime
          autem vero?
        </p>
        <h1 className="text-3xl pt-3">Heading2</h1>
        <p className="pb-[92px]">
          Lorem ipsum door sit amet consectetur adipisicing elit. Molestiae
          excepturi similique quas quae modi non ea temporibus, magnam fugiat
          suscipit nihil ducimus. Iusto dolore deleniti quo praesentium dolorem
          soluta animi.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Clients;

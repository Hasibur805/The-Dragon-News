import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/Homelayout/LeftAside";
import RightAside from "../Components/Homelayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <section>
          <Navbar></Navbar>
        </section>
      </header>

      <main className="max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12  my-6">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>

        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;

"use client";

import { useState, useEffect } from "react";
import SampleComponent from "./smapleComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ReactLifeCycle = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    console.log("This is useEffect");
    setTimeout(() => {
      setFavoriteColor("rad");
    }, 5000);
  }, []);

  useEffect(() => {
    console.log("This is useEffect 2");
    console.log("Todo useEffect");
    //setFavoriteColor(`Yellow${Math.random()}`);
  }, [todo.length, favoriteColor]);

  useEffect(() => {
    console.log("This is useEffect 3");
    console.log("favoriteColor", favoriteColor);
  }, [favoriteColor]);

  return (
    <div className="p-20">
      <button
        className="bg-blue-500 rounded-sm p-3"
        onClick={() => {
          setTodo([]);
        }}
      >
        Click me
      </button>
      React Life Cycle The constructor method is called, by React, every time
      you make a component:
      <h1 className="font-bold text-2xl">
        {" "}
        My Favorite Color is {favoriteColor}
      </h1>
      <p className="text-green-700">
        The componentDidMount() method is called after the component is
        rendered. This is where you run statements that requires that the
        component is already placed in the DOM.
      </p>
      <SampleComponent id={10} />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        The People of the Kingdom
      </h2>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        {`"After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege." `}
      </blockquote>
      <div className="flex gap-2">
        <Button>Primary</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"outline"}>Outline</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button size={"lg"}>Primary Lg</Button>
      </div>
      <Input placeholder="this is ShadCn Ui" />
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ReactLifeCycle;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** importing our pages */
import MarsPhotos from "./marsphotos";
import MarsPhoto from "./marsphoto";
import TimelinePage from "./timeline";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MarsPhotos />} path="/" />
        <Route element={<MarsPhoto />} path="/marsphoto/:marsPhotoId" />
        <Route element={<TimelinePage />} path="/timeline" />
      </Routes>
    </BrowserRouter>
  );
}

import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { supabase } from "./client";

import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("Creator")
        .select()
        .order("created_at", { ascending: true });

      setCreators(data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <div className="text-center py-4 space-y-3">
        <h1 className="text-5xl">Creatorverse</h1>
        <div className="space-x-3">
          <button className="navButton">
            <Link to="/">Home</Link>
          </button>
          <button className="navButton">
            <Link to="/new">Add A Creator</Link>
          </button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<ShowCreators creators={creators} />} />
        <Route path="/new" element={<AddCreator />} />
        <Route path="/:id">
          <Route index element={<ViewCreator creators={creators} />} />
          <Route
            path="edit"
            element={
              creators && creators.length > 0 ? (
                <EditCreator creators={creators} />
              ) : (
                <p>Sorry Can Not Edit Creator</p>
              )
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <p className="text-white text-center text-4xl mt-10">
              404 Page Not Found
            </p>
          }
        />
      </Routes>
    </>
  );
}

export default App;

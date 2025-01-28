import React, { Suspense } from "react";

const InputComponent = React.lazy(() => import("./components/inputField"));

function App() {
  return (
    <div className="relative">
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <main>
          <InputComponent />
        </main>
        <footer className="fixed bottom-5 right-0 left-0 text-center">
          Keira M Jeong for FIYGE Research.
        </footer>
      </Suspense>
    </div>
  );
}

export default App;

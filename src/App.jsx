import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");


  const options = [
    {
      icon: "sunny",
      text: 'light',
    },
    {
      icon: "moon",
      text: 'dark',
    },
    {
      icon: "desktop-outline",
      text: 'system',
    }
  ];


  function onWindowMatch() {
    if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark")
    } else {
      element.classList.remove("dark")
    }
  }

  onWindowMatch();

  useEffect(() => {

    if(theme === 'dark'){
      element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }else if(theme === 'light'){
      element.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }else{
      localStorage.removeItem('theme');
        onWindowMatch();
        return;
    }
  }, [theme])

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {

      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }

    }
  });

  return (
    <section className="min-h-screen pt-8 dark:text-gray-100 dark:bg-slate-900 duration-100 " >

      <div className="fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded" >
        {
          options?.map(opt => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && 'text-sky-600'}`} >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))
        }

      </div>

      <div className="max-w-3xl mx-auto px-5" >
        <div className="flex flex-row  gap-4" >
        <img  width={30} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
          <h2 className="font-bold text-2xl" >Tema TailwindCSS</h2>
        </div>
        <p className="font-medium mt-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quaerat sit delectus quis tenetur, corporis suscipit sed veniam, deleniti porro eum! Voluptatum quasi vero ea placeat. Minima asperiores voluptatum aperiam?</p>
        <br></br>
        <p className="font-medium" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quaerat sit delectus quis tenetur, corporis suscipit sed veniam, deleniti porro eum! Voluptatum quasi vero ea placeat. Minima asperiores voluptatum aperiam?</p>
        <br></br>
        <p className="font-medium" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quaerat sit delectus quis tenetur, corporis suscipit sed veniam, deleniti porro eum! Voluptatum quasi vero ea placeat. Minima asperiores voluptatum aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatibus ipsam expedita consectetur atque voluptatum assumenda temporibus, quidem officiis ea! Illo delectus quibusdam maiores totam id, fugiat necessitatibus magnam tenetur.</p>
        <br></br>
        <p className="font-medium" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quaerat sit delectus quis tenetur, corporis suscipit sed veniam, deleniti porro eum! Voluptatum quasi vero ea placeat. Minima asperiores voluptatum aperiam?</p>
        <br></br>
      </div>

    </section>
  )
}

export default App

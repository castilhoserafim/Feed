import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
     <Header /> 

     <div className={styles.wrapper}>
       <Sidebar />
       <main>
         <Post 
           author="Wesley Castilho" 
           content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam unde amet consequuntur, repudiandae accusamus, nisi consequatur, numquam iusto molestias pariatur suscipit facilis a tenetur. Possimus, quasi. Atque, laboriosam enim?"
         />
          <Post 
           author="Castilho Serafim"
           content="Um novo post muito legal"
          />
        </main>
     </div>
    </div>
  )
}

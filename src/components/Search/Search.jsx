// import React, {useState, useEffect} from 'react'
// import {FiSearch} from 'react-icons/fi'
// import axios from 'axios'
// import './SearchStyles.css'



// const Search = () => {
//     const [input, setInput] = useState('')
//     const [searchedRecipes, setSearchedRecipes] = useState('');

//     const submitHandler = (e) => {
//         e.preventDefault()
//         getSearched()
        
//     }


//     const getSearched = (() => {
//        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&query=`)
//          .then((response) => {
//            // console.log(response.data)
//            setSearchedRecipes(response.data.recipes);
//          })
//          .catch((err) => console.log(err));
//      });
   
//      useEffect(() => {
//         getSearched()
//      },[])
   

//   return (
//       <>
//     <div className='main'>
//     <div className="content1">
//         <h1 style={{marginBottom: '1rem'}}>Look for a recipe</h1>
//         <form onSubmit={submitHandler} className="form1">
//             <div>
//                 <input onChange={(e) => setInput(e.target.value)}
//                 type="text"
//                 value={input} />
//             </div>
//             <div>
//                 <button type='submit'><FiSearch className='icon' /></button>
//             </div>
//         </form>
//         <div>
//             {
//                 searchedRecipes.map((item) => (
//                     <div key={item.id}>
//                         <img src={item.image} alt="/" />
//                         <h2>{item.title}</h2>
//                     </div>
//                 ))
//             }
//         </div>
//     </div>
// </div>
// </>
//   )
// }

// export default Search
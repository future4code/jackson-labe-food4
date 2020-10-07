import React, {useState} from "react";
import useRequestData from '../../services/useRequestData'
import RestaurantsCards from './RestaurantsCards'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import UpperMenuCat from './UpperMenuCat'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '80vw',
    },
  },
}));

const Feed = () => {
  const getRestaurant = useRequestData([], 'restaurants')
  const classes = useStyles();

    const [inputRestaurant, setInputRestaurant] = useState('')
    const [inputCategories, setInputCategories] = useState('')
    const [categories, setCategories] = useState([])
    const [showMenu, setShowMenu] = useState(true)
    const [showSearch, setShowSearch] = useState(false)
    const [showRender, setShowRender] = useState(true)
    const [restaurants, setRestaurants] = useState({})

    const menu = () => {
      setShowMenu(false)
      setShowSearch(true)
      setShowRender(false)
      setInputRestaurant('')
    }

    const offMenu = () => {
      setShowMenu(true)
      setShowSearch(false)
      setInputRestaurant('')
    }
  

    const handleInput = (e) => {
      setInputRestaurant(e.target.value.toLowerCase()) 
      setShowRender(true)     
    }
    
        
    
    const getCategories = () => {
      
      getRestaurant.map(item => {
        let hasCat = false
        categories.map(cat => {
          if (cat === item.category){
            hasCat = true
          }
          
        })  
        if (hasCat === false){
          let categoriesArray = [...categories, item.category]
          setCategories(categoriesArray)
          
        }
      }
      )
    }  
    
    getCategories()
    
    
    const renderCards = () => (
      getRestaurant
      .filter(item => {
          return item.category.indexOf(inputCategories) >= 0
        }) 
        .filter(item => {
          return item.name.toLowerCase().indexOf(inputRestaurant) >= 0
        })  
        .map((item) => {
          return (
            <RestaurantsCards
              key={item.id}
              item={item}
            />
          )
        })
    )

  return(

    <div>
    <form className={classes.root} noValidate autoComplete="off">
      
      <TextField 
      id="outlined-basic" 
      label="Restaurantes" 
      variant="outlined"
      onChange={handleInput}
      onFocus={() => menu()}
      onBlur={() => offMenu(true)}
      

      type="text"
      InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search style={{color:"gray"}} />
            </InputAdornment>
          ),
        }}
      />
    </form>
    {showSearch && <p>Busque por nome do Restaurante</p>}
    {showMenu && <UpperMenuCat
      setInputCategories={setInputCategories}
      categories={categories}
    />}
  {/* {restaurants.length === 0 ? <p>{restaurants.length}</p> : <p>Não encontramos :(</p>} */}
    
    {showRender && renderCards()}

    
    </div>

    

  )
      }

export default Feed

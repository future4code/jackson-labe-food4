import React, {useState, useEffect} from "react";
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

    const handleInput = (e) => {
      setInputRestaurant(e.target.value.toLowerCase())      
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
    <UpperMenuCat
      setInputCategories={setInputCategories}
      categories={categories}
    />
    {renderCards()}

    
    </div>

    

  )
      }

export default Feed

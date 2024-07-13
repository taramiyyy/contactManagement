import { COTTONRED, BLONDEY} from "../helpers/Colors"

const Search = () => {
  return (
    <>
        <div className="input-group mx-2 w-75" dir="ltr">
            <span className="input-group-text" style={{backgroundColor: COTTONRED, borderColor: COTTONRED}}><i className="fa fa-search"></i></span>
            <input dir="rtl" type="text" style={{backgroundColor: BLONDEY, borderColor: COTTONRED}} className="form-control" placeholder="جستجوی مخاطبین..."></input>
        </div>
    </>
  )
}

export default Search
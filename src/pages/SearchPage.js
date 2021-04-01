import React from 'react';
import "./SearchPage.css";
import {useStateValue} from "../StateProvider/StateProvider";
import useGoogleSearch from "../components/useGoogleSearch";
// import Response from "../response";
import {Link} from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);

    // const data = Response;

    // https://cse.google.com/cse/create/new
    console.log(data);

    return (
        <div className="searchPage">
            {/*<h1>This is search page WoW!!!!!</h1>*/}
            <div className="searchPage_header">
                <Link to="/">
                    <img
                        className="logo"
                        src="https://images.pexels.com/photos/7358438/pexels-photo-7358438.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        alt=""/>
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons/>
                    <div className="searchPage_options">

                        
                    </div>
                </div>
            </div>

            {term && (
                <div className="searchPage_results">

                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results
                        ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage_result">
                         
                            <a href={item.link} target="_blank">
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img
                                        className="searchPage_resultImage"
                                        src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                        alt=''
                                    />
                                )}
                                {item.displayLink} ✔
                            </a>
                      
                            <a className="searchPage_resultTitle" href={item.link} target="_blank">
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage_resultSnippet">
                                {item.snippet}
                            </p>
                            <hr/>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
}

export default SearchPage;
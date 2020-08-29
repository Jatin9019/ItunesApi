import React from 'react'; 
import { SearchBar } from '../components/SearchBar';
import { SearchList } from '../components/SearchList';
export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={Audiodata:[]};
        this.searchtxtvalue='';
    }
    componentDidMount(){
        //this.giveMeTheData();
    }
    giveMeTheData(searchValue){
        const urlitunes=`https://itunes.apple.com/search?term=${searchValue}&limit=25`;
        const promise = fetch(urlitunes,{method :'POST'});
        promise.then(response=>{
            var p = response.json();
            p.then(result=>{
                console.log("Data is" ,result.results);
                this.setState({Audiodata:result.results})
            }).catch(err=>{
                console.log("Error is" , err);
            })
            console.log("Response is coming " ,response);
        }).catch(err=>{
            console.log("error is coming" ,err);
        })
    }
    takeInput(event){
        let data = event.target.value;
        this.searchtxtvalue=data;
        console.log("calling",this.searchtxtvalue );

    }
    searchNow(){
        console.log('clicked');
        this.giveMeTheData(this.searchtxtvalue);
    }
    render(){
        return(
            <div>
            <h1 className="alert-info"><center>{this.props.title}</center></h1>
            <SearchBar takeInput={this.takeInput.bind(this)} btClick={this.searchNow.bind(this)} />
            <SearchList Audiodata={this.state.Audiodata} />
        </div>
        )
    }
}
/*
function Search(){
    return(
        <div>
            <h1 className="alert-info"><center>ITUNES API</center></h1>
            <SearchBar />
            <SearchList />
        </div>
    )
}
export default Search;
*/
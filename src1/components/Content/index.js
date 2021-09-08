import React, { useEffect, useState } from "react";
import Title from "./Title";
import ActionButtons from "./ActionButtons";
import ButttonFilters from "./ButttonFilters";
import Posts from "./Posts";

const Content = () => {
  const [language, setLanguage] = useState([
    {
      "Select / UnSelect All": true,
      "English": true,
      "German": true,
      "Chinese": true,
      "Italian": true
    }
  ]);
  const [refreshTime, setRefreshTime] = useState([
    {
      "1min": true,
      "2min": false,
      "3min": false
    }
  ]);
  const [orderValue, setOrderValue] = useState([
    {
      "Top Rated": true,
      "Latest": false,
      "Most Rated": false,
      "Popular": false
    }
  ]);
  const [active, setActive] = useState("");
  const [show, setShow]     = useState(false);
  const [data, setData] = useState([]);
  const [uuidForShow, setUuidForShow] = useState([]);

  const updateData = () => {
    console.log("test");
    let stringOrderValue;
    if(orderValue[orderValue.length - 1]["Top Rated"] === true){
      stringOrderValue = "top";
    }
    else if(orderValue[orderValue.length - 1]["Latest"] === true){
      stringOrderValue = "latest";
    }
    else if(orderValue[orderValue.length - 1]["Most Rated"] === true){
      stringOrderValue = "most";
    }
    else if(orderValue[orderValue.length - 1]["Popular"] === true){
      stringOrderValue = "popular";
    }
    else{}

    let stringLanguage = [];
    if(language[language.length - 1]["English"] === true){
      stringLanguage.push("en");
    }
    if(language[language.length - 1]["German"] === true){
      stringLanguage.push("gr");
    }
    if(language[language.length - 1]["Chinese"] === true){
      stringLanguage.push("ch");
    }
    if(language[language.length - 1]["Italian"] === true){
      stringLanguage.push("it");
    }
    else{}

    const apiUrl = "https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?limit=20&languages=" + stringLanguage + "&order=" + stringOrderValue + "&page_token%20=d2093c93-7dcd-432e-a5d7-7e9e17acd48e";
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data.stories));
    if(data.length !== 0) {
      let arrUuidForShow = data.map((item) => {
        return (
          {
            uuid: item.uuid,
            show: false,
          }
        );
      })
      setUuidForShow(arrUuidForShow);
    }
  }

  useEffect(() => {
    updateData();
    let numberRefreshTime;
    if(refreshTime[refreshTime.length - 1]["1min"] === true){
      numberRefreshTime = 60;
    }
    else if(refreshTime[refreshTime.length - 1]["2min"] === true){
      numberRefreshTime = 120;
    }
    else if(refreshTime[refreshTime.length - 1]["3min"] === true){
      numberRefreshTime = 180;
    }
    else{}
    const timer = setInterval(updateData, numberRefreshTime * 1000);

    return () => clearInterval(timer);
  }, [orderValue, refreshTime, language, data.length]);

  console.log("language", language);

  const changeActions = (value) => {
    setActive(value);
  }
  const showFilters = (value) => {
    setShow(value);
  }

  const changeLanguageValues = (e) => {
    let item;
    if(e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "Select / UnSelect All"){
      item = e.target.nextElementSibling.innerHTML;
    }
    else if(e.target.innerHTML === "Select / UnSelect All"){
      item = e.target.innerHTML;
    }
    else if(e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "English"){
      item = e.target.nextElementSibling.innerHTML;
    }
    else if(e.target.innerHTML === "English"){
      item = e.target.innerHTML;
    }
    else if(e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "German"){
      item = e.target.nextElementSibling.innerHTML;
    }
    else if(e.target.innerHTML === "German"){
      item = e.target.innerHTML;
    }
    else if(e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "Chinese"){
      item = e.target.nextElementSibling.innerHTML;
    }
    else if(e.target.innerHTML === "Chinese"){
      item = e.target.innerHTML;
    }
    else if(e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "Italian"){
      item = e.target.nextElementSibling.innerHTML;
    }
    else if(e.target.innerHTML === "Italian"){
      item = e.target.innerHTML;
    }
    else{}

    if(item === "Select / UnSelect All"){
      setLanguage([
        ...language,
        {
          "Select / UnSelect All": !language[language.length - 1]["Select / UnSelect All"],
          "English":               !language[language.length - 1]["Select / UnSelect All"],
          "German":                !language[language.length - 1]["Select / UnSelect All"],
          "Chinese":               !language[language.length - 1]["Select / UnSelect All"],
          "Italian":               !language[language.length - 1]["Select / UnSelect All"],
        }
      ])
    }
    else if(item === "English" || item === "German" || item === "Chinese" || item === "Italian"){
      setLanguage([
        ...language,
        {
          "Select / UnSelect All": (
            (language[language.length - 1][item] !== true && language[language.length - 1]["English"] !== true && language[language.length - 1]["German"] === true && language[language.length - 1]["Chinese"] === true && language[language.length - 1]["Italian"] === true) ? true 
            : (language[language.length - 1][item] !== true && language[language.length - 1]["English"] === true && language[language.length - 1]["German"] !== true && language[language.length - 1]["Chinese"] === true && language[language.length - 1]["Italian"] === true) ? true 
            : (language[language.length - 1][item] !== true && language[language.length - 1]["English"] === true && language[language.length - 1]["German"] === true && language[language.length - 1]["Chinese"] !== true && language[language.length - 1]["Italian"] === true) ? true 
            : (language[language.length - 1][item] !== true && language[language.length - 1]["English"] === true && language[language.length - 1]["German"] === true && language[language.length - 1]["Chinese"] === true && language[language.length - 1]["Italian"] !== true) ? true 
            : false
          ),
          "English":               (item === "English"               ? (!language[language.length - 1]["English"])               : language[language.length - 1]["English"]),
          "German":                (item === "German"                ? (!language[language.length - 1]["German"])                : language[language.length - 1]["German"]),
          "Chinese":               (item === "Chinese"               ? (!language[language.length - 1]["Chinese"])               : language[language.length - 1]["Chinese"]),
          "Italian":               (item === "Italian"               ? (!language[language.length - 1]["Italian"])               : language[language.length - 1]["Italian"]),
        }
      ]
      )
    }
    else{}
  } 
  const changeOrderValue = (e) => {
    if(orderValue[orderValue.length - 1]["Top Rated"] === false && ((e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "Top Rated") || e.target.innerHTML === "Top Rated")){
      setOrderValue([
        ...orderValue,
        {
          "Top Rated": true,
          "Latest": false,
          "Most Rated": false,
          "Popular": false
        }
      ])
    }
    else if(orderValue[orderValue.length - 1]["Latest"] === false && ((e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "Latest") || e.target.innerHTML === "Latest")){
      setOrderValue([
        ...orderValue,
        {
          "Top Rated": false,
          "Latest": true,
          "Most Rated": false,
          "Popular": false
        }
      ])
    }
    else if(orderValue[orderValue.length - 1]["Most Rated"] === false && ((e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "Most Rated") || e.target.innerHTML === "Most Rated")){
      setOrderValue([
        ...orderValue,
        {
          "Top Rated": false,
          "Latest": false,
          "Most Rated": true,
          "Popular": false
        }
      ])
    }
    else if(orderValue[orderValue.length - 1]["Popular"] === false && ((e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "Popular") || e.target.innerHTML === "Popular")){
      setOrderValue([
        ...orderValue,
        {
          "Top Rated": false,
          "Latest": false,
          "Most Rated": false,
          "Popular": true
        }
      ])
    }
    else{}
  }

  const changeRefreshTime = (e) => {
    if(refreshTime[refreshTime.length - 1]["1min"] === false && ((e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "1min") || e.target.innerHTML === "1min")){
      setRefreshTime([
        ...refreshTime,
        {
          "1min": true,
          "2min": false,
          "3min": false
        }
      ])
    }
    else if(refreshTime[refreshTime.length - 1]["2min"] === false && ((e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "2min") || e.target.innerHTML === "2min")){
      setRefreshTime([
        ...refreshTime,
        {
          "1min": false,
          "2min": true,
          "3min": false
        }
      ])
    }
    else if(refreshTime[refreshTime.length - 1]["3min"] === false && ((e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "3min") || e.target.innerHTML === "3min")){
      setRefreshTime([
        ...refreshTime,
        {
          "1min": false,
          "2min": false,
          "3min": true
        }
      ])
    }
    else{}
  }

  return (
    <div className="content">
      <Title />
      <ActionButtons
        active={active}
        updateData={updateData}
        changeActions={changeActions}
        showFilters={showFilters}
        show={show}
      />
      <ButttonFilters
        refreshTime={refreshTime}
        changeRefreshTime={changeRefreshTime}
        orderValue={orderValue}
        changeOrderValue={changeOrderValue}
        language={language}
        changeLanguageValues={changeLanguageValues}
        show={show}
      />
      <Posts
        data={data}
        uuidForShow={uuidForShow}
        setUuidForShow={setUuidForShow}
      />
    </div>
  );
}

export default Content;
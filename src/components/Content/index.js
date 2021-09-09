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
      "1min": false,
      "2min": true,
      "3min": false
    }
  ]);
  const [orderValue, setOrderValue] = useState([
    {
      "Top Rated": true,
      "Latest": false,
      "Retweeted": false,
      "Read": false
    }
  ]);
  const [active, setActive] = useState("");
  const [show, setShow]     = useState(false);
  const [data, setData] = useState([]);
  const [uuidForShow, setUuidForShow] = useState([]);
  const [pageToken, setPageToken] = useState("");

  const updateData = () => {
    if(pageToken === ""){
      console.log("test");
      let stringOrderValue;
      if(orderValue[orderValue.length - 1]["Top Rated"] === true){
        stringOrderValue = "top";
      }
      else if(orderValue[orderValue.length - 1]["Latest"] === true){
        stringOrderValue = "latest";
      }
      else if(orderValue[orderValue.length - 1]["Retweeted"] === true){
        stringOrderValue = "retweeted";
      }
      else if(orderValue[orderValue.length - 1]["Read"] === true){
        stringOrderValue = "read";
      }
      else{}

      let stringLanguage = [];
      if(language[language.length - 1]["English"] === true){
        stringLanguage.push("en");
      }
      if(language[language.length - 1]["German"] === true){
        stringLanguage.push("de");
      }
      if(language[language.length - 1]["Chinese"] === true){
        stringLanguage.push("zh");
      }
      if(language[language.length - 1]["Italian"] === true){
        stringLanguage.push("it");
      }
      else{}

      const apiUrl = "https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?limit=20&languages=" + stringLanguage + "&order_by=" + stringOrderValue + "&page_token%20=d2093c93-7dcd-432e-a5d7-7e9e17acd48e";
      fetch(apiUrl)
        .then(response => response.json())
        .then(updateData => { setData(updateData.stories); setPageToken(updateData.next_page_token); arrUuidForShowFunc(updateData.stories)});
      const arrUuidForShowFunc = (updateData) => {
        let arrUuidForShow = updateData.map((item) => {
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
    else{
      setPageToken("");
    }
  }

  const loadData = () => {
    let stringOrderValue;
    if(orderValue[orderValue.length - 1]["Top Rated"] === true){
      stringOrderValue = "top";
    }
    else if(orderValue[orderValue.length - 1]["Latest"] === true){
      stringOrderValue = "latest";
    }
    else if(orderValue[orderValue.length - 1]["Retweeted"] === true){
      stringOrderValue = "retweeted";
    }
    else if(orderValue[orderValue.length - 1]["Read"] === true){
      stringOrderValue = "read";
    }
    else{}

    let stringLanguage = [];
    if(language[language.length - 1]["English"] === true){
      stringLanguage.push("en");
    }
    if(language[language.length - 1]["German"] === true){
      stringLanguage.push("de");
    }
    if(language[language.length - 1]["Chinese"] === true){
      stringLanguage.push("zh");
    }
    if(language[language.length - 1]["Italian"] === true){
      stringLanguage.push("it");
    }
    else{}

    const apiUrl = "https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?limit=20&languages=" + stringLanguage + "&order_by=" + stringOrderValue + "&page_token%20=" + pageToken;
    fetch(apiUrl)
      .then(response => response.json())
      .then(loadData => { setData(data.concat(loadData.stories)); setPageToken(loadData.next_page_token)});
    if(uuidForShow.length !== 0) {
      let arrUuidForShow = uuidForShow.map((item) => {
        return (
          {
            uuid: item.uuid,
            show: false,
          }
        );
      })
      setUuidForShow(uuidForShow.concat(arrUuidForShow));
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
  }, [orderValue, refreshTime, language]);

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
          "Retweeted": false,
          "Read": false
        }
      ])
    }
    else if(orderValue[orderValue.length - 1]["Latest"] === false && ((e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "Latest") || e.target.innerHTML === "Latest")){
      setOrderValue([
        ...orderValue,
        {
          "Top Rated": false,
          "Latest": true,
          "Retweeted": false,
          "Read": false
        }
      ])
    }
    else if(orderValue[orderValue.length - 1]["Retweeted"] === false && ((e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "Retweeted") || e.target.innerHTML === "Retweeted")){
      setOrderValue([
        ...orderValue,
        {
          "Top Rated": false,
          "Latest": false,
          "Retweeted": true,
          "Read": false
        }
      ])
    }
    else if(orderValue[orderValue.length - 1]["Read"] === false && ((e.target.nextElementSibling !== null && e.target.nextElementSibling.innerHTML === "Read") || e.target.innerHTML === "Read")){
      setOrderValue([
        ...orderValue,
        {
          "Top Rated": false,
          "Latest": false,
          "Retweeted": false,
          "Read": true
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
      <div className="action_buttons">
        <button className={"button"} onClick={() => loadData()}>
          <span className="action_button_text">Load posts</span>
        </button>
      </div>
    </div>
  );
}

export default Content;
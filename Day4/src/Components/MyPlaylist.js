// import React, { useState, useEffect } from 'react'
// import PlayList from './PlayList'
// import SearchResults from './SearchResults'
// import Spotify from '../utils/Spotify'
// import NavBar from './NavBar'
// import { useNavigate } from 'react-router-dom'
// import { savePlaylist } from '../utils/model'
const MyPlaylist = () => {
    // const history = useNavigate()
    // const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")))
    // useEffect(() => {
    //     if (!localStorage.getItem('user')) {
    //         history('/')       
    //     }
    //     setUserData(JSON.parse(localStorage.getItem("user")))
    // }, [history])
    // const [searchResults, setSearchResults] = useState([])
    // const [playListName, setPlayListName] = useState("")
    // const [playListTracks, setPlayListTracks] = useState([])
    // const search = (term) => {
    //     if (term !== "") {
    //         Spotify.search(term).then((searchResults) => setSearchResults(searchResults))
    //     }
    //     else {
    //     document.querySelector("#searchBar").focus()
    //     }
    // }
    // const addTrack = (track) => {
    //     if (playListTracks.find((savedTrack) => savedTrack.id === track.id)) {
    //     return
    //     }
    //     const newPlayListTracks = [...playListTracks, track]
    //     setPlayListTracks(newPlayListTracks)
    // }
    // const removeTrack = (track) => {
    //     const newPlayListTracks = playListTracks.filter((currentTrack) => currentTrack.id !== track.id)
    //     searchResults.unshift(track)
    //     setPlayListTracks(newPlayListTracks)
    // }
    // const removeTrackSearch = (track) => {
    //     const newSearchResults = searchResults.filter((currentTrack) => currentTrack.id !== track.id)
    //     setSearchResults(newSearchResults)
    // }
    // const doThese = (track) => {
    //     addTrack(track)
    //     removeTrackSearch(track)
    // }
    // const updatePlayListname = (name) => {
    //     setPlayListName(name)
    // }
    // const savePlayList = (e) => {
    //     e.preventDefault()
    //     if (playListName !== "") {
    //         alert('Playlist added successfully...')
    //         savePlaylist(userData.user_id, playListName, playListTracks)
    //         .then(req => {
    //             if (req) {
    //                 setPlayListName("")
    //                 setPlayListTracks([])
    //             }
    //         })
    //     }
    //     else {
    //     document.querySelector('#playListName').focus()
    //     }
    // }
    return (
        <>
            {/* <NavBar userData={userData}/> */}
            <div className="container">
                <h1 >Your PlayList</h1>
                <article className="section">
                    {/* <SearchResults search={search} searchResults={searchResults} onAdd={doThese} />
                    <PlayList playListTracks={playListTracks} playListName={playListName} onNameChange={updatePlayListname} onRemove={removeTrack} onSave={savePlayList} /> */}
                </article>
            </div>
        </>
    )
}
export default MyPlaylist
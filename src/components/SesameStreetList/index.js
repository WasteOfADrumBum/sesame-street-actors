import React, { useState, useEffect } from 'react'
import { SelectListOption, ScrollToTop } from '../../components'
import { SessameStreetActors, Alphabet } from '../../utils'
import './_sasameStreeList.scss'

const SesameStreetList = () => {
  const [letterOfTheDay, setLetterOfTheDay] = useState({ letter: '' })
  const [numberOfTheDay, setNumberOfTheDay] = useState({ number: '' })
  const { letter } = letterOfTheDay
  const { number } = numberOfTheDay

  const SessameStreetFilter = () => {
    const onChangeLetter = (e) => {
      setLetterOfTheDay({ ...letterOfTheDay, [e.target.name]: e.target.value })
      setNumberOfTheDay({ number: '' })
    }

    const onChangeNumber = (e) => {
      setNumberOfTheDay({ ...numberOfTheDay, [e.target.name]: e.target.value })
      setLetterOfTheDay({ letter: '' })
    }

    const onClickClear = () => {
      setNumberOfTheDay({ number: '' })
      setLetterOfTheDay({ letter: '' })
    }

    const filterExpisodes = (SessameStreetActors) => {
      var episodeArr = []
      for (var i = 0; i < SessameStreetActors.length; i++) {
        if (
          episodeArr.indexOf(SessameStreetActors[i].episode) === -1 &&
          SessameStreetActors[i].episode !== ''
        ) {
          episodeArr.push({
            label: SessameStreetActors[i].episode,
            value: SessameStreetActors[i].episode,
          })
        }
      }

      var sortArr = episodeArr.sort((a, b) => (a.label > b.label ? 1 : -1))

      return sortArr
    }

    return (
      <div className="sesameStreetFilter mb-5">
        <div className="row d-flex">
          <div className="elmo d-grid col-md-6 m-auto justify-content-end mb-3">
            <img
              src="./assets/images/elmo-face.png"
              alt="elmo"
              className="elmoImg img-fluid"
            />
            <blockquote className="speechBubble">
              <div>The letter of the day is... </div>
            </blockquote>
            <SelectListOption
              name="letter"
              placeholder="Select the letter of the day!"
              value={
                letter && {
                  label: letter,
                  value: letter,
                }
              }
              onChange={(e) => onChangeLetter(e)}
              options={Alphabet}
            />
          </div>
          <div className="cookieMonster d-grid col-md-6 m-auto justify-content-start mb-3">
            <blockquote className="speechBubble">
              <div>The number of the day is... </div>
            </blockquote>
            <img
              src="./assets/images/cookie-monster-face.png"
              alt="cookie monster"
              className="cookieMonsterImg img-fluid"
            />
            <SelectListOption
              placeholder="Select the number of the day!"
              name="number"
              value={
                number && {
                  label: number,
                  value: number,
                }
              }
              onChange={(e) => onChangeNumber(e)}
              options={filterExpisodes(SessameStreetActors)}
            />
          </div>
          <div className="col-md-12 text-center">
            <button
              type="button"
              className="btn btn-info text-white m-1"
              onClick={() => onClickClear()}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    )
  }

  const SesameStreetCard = () => {
    const [filteredActors, setFilteredActor] = useState([])

    useEffect(() => {
      const filterActors = () => {
        if (letter !== '') {
          let filteredData = SessameStreetActors.filter(
            (actor) => actor.lastName.charAt(0) === letter.toUpperCase(),
          )
          setFilteredActor(filteredData)
        } else if (number !== '') {
          let filteredData = SessameStreetActors.filter(
            (actor) => actor.episode === number,
          )
          setFilteredActor(filteredData)
        } else {
          setFilteredActor(SessameStreetActors)
        }
      }
      filterActors()
    }, [])

    return (
      <div className="sesameStreetCards row d-flex align-items-center justify-content-center">
        {filteredActors.map((actor, i) => (
          <div key={i} className="actor position-relative m-1 mb-5 col-md-4">
            <div className="image">
              <img
                src={actor.image}
                alt={actor.name}
                className="border border-5 rounded-circle img-fluid"
              />
            </div>
            {actor.name && actor.name !== '' && (
              <span className="name position-absolute top-100 start-50 translate-middle badge rounded-pill bg-primary border border-5">
                <div className="fs-5 p-1 pb-2">{actor.name}</div>
              </span>
            )}
            {actor.episode && actor.episode !== '' && (
              <span className="episode position-absolute badge rounded-pill bg-info text-center p-2 border border-5">
                <div className="text-uppercase">ep</div>
                <div>#{actor.episode}</div>
              </span>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="sesameStreetList">
      <header>
        <h1>List of guest stars on Sesame Street</h1>
      </header>
      <SessameStreetFilter />
      <SesameStreetCard />
      <ScrollToTop />
    </div>
  )
}

export default SesameStreetList

' use client'
import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import desh from "@/lib/Countrydata";

// const people = [
//   'Durward Reynolds',
//   'Kenton Towne',
//   'Therese Wunsch',
//   'Benedict Kessler',
//   'Katelyn Rohan',
// ]

export default function Country(){
const [selectedPerson, setSelectedPerson] = useState("");
const [query, setQuery] = useState('')
 const filteredPeople =
    query === ''
      ? desh
      : desh.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase())
        })

    return(
        <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Input  onChange={(event) => setQuery(event.target.value)} />
        <Combobox.Options className="hasanp">
          {filteredPeople.map((person) => (
            <Combobox.Option key={person} value={person}>
              {person}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>

    )
};
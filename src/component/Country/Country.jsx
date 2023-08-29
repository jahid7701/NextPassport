' use client'
import { useState } from 'react'
import { Combobox } from '@headlessui/react'
const people = [
  'Bangladesh',
  'Nepal',
  'Pakistan',
  'South Africa',
  'England',
  'UnitedArab Amirat',
  'Austarlia',
  'Switzerland',
  'Finland',
  'Zimabuwe',
  'Japan'
]

export default function Country(){
const [selectedPerson, setSelectedPerson] = useState("");
const [query, setQuery] = useState('')
 const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
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
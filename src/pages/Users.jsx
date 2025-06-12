import React, { useEffect, useState } from 'react'
import u1 from '../assets/u-1.svg'
import useAxios from '../hooks/useAxios'
import FilterCandidate from '../components/FilterCandidate'

const Users = () => {
  const { data } = useAxios()
  const [filter, setFilter] = useState([])
  const [allTechnologies, setAllTechnologies] = useState([])
  const [selectedTech, setSelectedTech] = useState(null)
  const [showFilterOptions, setShowFilterOptions] = useState(false)

  useEffect(() => {
    if (data) {
      setFilter(data)

      const techSet = new Set()
      data.forEach(user => {
        user.technologies.forEach(tech => techSet.add(tech))
      })
      setAllTechnologies(Array.from(techSet))
    }
  }, [data])

  const handleTechClick = (tech) => {
    setSelectedTech(tech)
    const filtered = data.filter(user => user.technologies.includes(tech))
    setFilter(filtered)
  }

  const handleReset = () => {
    setFilter(data)
    setSelectedTech(null)
  }

  return (
    <div>
        <button 
            onClick={() => setShowFilterOptions(prev => !prev)}
            className=" mx-10 shadow-2xl px-4 py-2 mt-5 bg-[#5CA5A5] text-white rounded-lg">
            {showFilterOptions ? 'Hide Filters' : 'Filter'}
        </button>


      {showFilterOptions && (
        <div>
          <div className='flex items-center justify-between'>
              <h2 className="text-xl font-bold my-5 mx-10 max-md:text-lg">Filter by Technology:</h2>
              {selectedTech && (
                  <button
                    onClick={handleReset}
                    className=" mx-10 px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-full text-sm"
                  >
                    Reset
                  </button>
                )}
          </div>
          <div className="flex mx-10 flex-wrap gap-3 mb-5">
            {allTechnologies.map((tech, i) => (
              <button
                key={i}
                onClick={() => handleTechClick(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium 
                  ${selectedTech === tech ? 'bg-[#5CA5A5] text-white' : 'bg-[#EFF7F7] text-black'}
                  hover:bg-[#d4e2e2] transition-all`}
              >
                {tech}
              </button>
            ))}
            
          </div>
        </div>
      )}

      <FilterCandidate />

      <div className='users container pb-10'>
        {filter && filter.map((d) => (
          <div key={d.id} className='flex shadow-xl relative max-lg:flex-col space-y-5 items-center justify-between bg-white p-7 rounded-2xl mt-10 hover:scale-105 transition-all'>
            <div className='flex gap-5 items-center'>
              <img src={u1} className='max-sm:absolute top-[-30px] left-5 max-sm:w-15' alt="" />
              <div>
                <ul className='flex gap-5 *:text-sm *:font-bold'>
                  <li className='text-[#5CA5A5]'>{d.company}</li>
                  {d.isNew && (<li className='text-white px-2 py-1 bg-[#5CA5A5] rounded-2xl'>NEW!</li>)}
                  {d.isFeatured && (<li className='text-white px-2 py-1 bg-black rounded-2xl'>FEATURED</li>)}
                </ul>
                <h3 className='text-xl font-bold'>{d.title}</h3>
                <ul className='flex gap-5 *:opacity-50 items-center'>
                  <li>1d ago</li>
                  <span className='w-1 h-1 bg-gray-500 rounded-full'></span>
                  <li>{d.employment}</li>
                  <span className='w-1 h-1 bg-gray-500 rounded-full'></span>
                  <li>{d.location}</li>
                </ul>
              </div>
            </div>
            <ul className='flex flex-wrap gap-10 max-lg:gap-5 *:px-3 *:py-2 *:bg-[#EFF7F7] *:rounded-lg *:hover:bg-[#d4e2e2] *:transition-all *:hover:scale-110'>
              {d.technologies.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users

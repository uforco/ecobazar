'use clinet'
import React, { useEffect, useState } from "react";
import bd_dist from "./bdgeo/bd-districts.json"
import bd_area from "./bdgeo/bd-postcodes.json"
import { Label } from '@/components/ui/label';

const SelectCompo = () => {
    const[dist, setDist] = useState('')
    const[distName, setDistName] = useState('')
    const[city, setCity] = useState('')
    const[postCodes, setPostCodes] = useState('')

    const[hydro, setHydro] = useState<number | undefined>(undefined)
    useEffect(()=>{
        if (typeof window !== 'undefined') setHydro(Date.now())
    },[])

//    //console.log(bd_dist?.districts)


  return (hydro &&
    <div className=" w-full flex items-center gap-3 " >
      <div className="w-full " >
        <Label>States</Label>
        <select
            value={distName}
            onChange={(e) => {
                setDistName(e.target.value)
                setPostCodes('')
                setCity('')
                setDist(e.target.value.split('-')[0])
            }}
            required
            id="States"
            name="states"
            className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-Primary focus:border-Primary block p-2.5 dark:text-white dark:focus:ring-Primary dark:focus:border-Primary appearance-none "
        >
            <option value={''} selected>Choose a States</option>
            {
                bd_dist?.districts?.map((value)=> <option key={value.id}  value={`${value.id}-${value.name}`}>{value.name} - {value.bn_name}</option> )
            }
        </select>
      </div>

      <div className="w-full " >
        <Label>City</Label>
        <select
            disabled={dist? false : true}
            value={city}
            required
            name="city"
            onChange={(e) => {
                setPostCodes('')
                setCity(e.target.value)
            }}
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-Primary focus:border-Primary block w-full p-2.5 dark:text-white dark:focus:ring-Primary dark:focus:border-Primary appearance-none "
        >
            <option value={''} selected>Choose a City</option>
            {
                bd_area?.postcodes
                .slice()
                .filter((value, index, self) => value.district_id == dist && index === self.findIndex((t) => t.upazila === value.upazila))
                .map((value)=> <option key={value.upazila} value={value.upazila}>{value.upazila}</option> )
            }
        </select>
      </div>

      <div className="w-full " >
        <Label>Post-Code</Label>
        <select
            disabled={city? false : true}
            value={postCodes}
            required
            name="postcode"
            onChange={(e) => setPostCodes(e.target.value)}
            id="postCode"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-Primary focus:border-Primary block w-full p-2.5 dark:text-white dark:focus:ring-Primary dark:focus:border-Primary appearance-none "
        >
            <option value={''} selected disabled >Choose a Post-Code</option>
            {
                bd_area?.postcodes
                .slice()
                .filter((value, index, self) => value.upazila == city )
                .map((value)=> <option key={value.postCode} value={value.postCode}>{value.postCode}</option> )
            }
        </select>
      </div>
    </div>
  );
};

export default SelectCompo;

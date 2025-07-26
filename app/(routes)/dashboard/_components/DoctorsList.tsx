"use client"
import { Button } from '@/components/ui/button'
import { AIDoctorAgents } from '@/shared/list'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoArrowForward } from 'react-icons/io5'
import AddNewSession from './AddNewSession'

export type Doctor = {
  id: number
  specialist: string
  description: string
  image: string
  agentPrompt: string
  voiceId: string
  subscriptionRequired?: boolean
}

function DoctorsList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)

  const handleDoctorClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor)
    setIsDialogOpen(true)
  }

  return (
    <div className='mt-10'>
      <h2 className="text-2xl font-bold">AI Specialist Doctors Agents</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5">
        {
          AIDoctorAgents.map((doctor: Doctor) => (
            <div
              key={doctor.id}
              className='border-2 border-gray-200 rounded-2xl p-4 cursor-pointer hover:border-primary/40 transition-colors'
              onClick={() => handleDoctorClick(doctor)}
            >
              <Image src={doctor.image} alt={doctor.specialist} width={100} height={100} className='rounded-xl w-full h-[250px] object-cover' />
              <h2 className="font-bold mt-1">{doctor.specialist}</h2>
              <p className="line-clamp-2 text-sm text-gray-500">{doctor.description}</p>
              <Button variant="outline" className='bg-primary text-white mt-2 w-full'>
                Start Consultation <IoArrowForward />
              </Button>
            </div>
          ))
        }
      </div>

      {/* Render AddNewSession with the selected doctor */}
      <AddNewSession
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        preSelectedDoctor={selectedDoctor}
      />
    </div>
  )
}

export default DoctorsList

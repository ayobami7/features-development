"use client"

import { BsCalendarDateFill } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import {  Modal,   ModalContent,   ModalHeader,   ModalBody, Button, ModalFooter} from "@nextui-org/modal";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import DownloadFile from "@/components/fileDownload";
import UploadFile from "@/components/fileUpload";
import { submissions } from "@/constants/submissions";
import { GrDownload } from "react-icons/gr";




const Assignment = () => {

    const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

    const openFirstModal = () => {
        setIsFirstModalOpen(true);
    };

    const closeFirstModal = () => {
        setIsFirstModalOpen(false);
    };

    const openSecondModal = () => {
        setIsSecondModalOpen(true);
    };

    const closeSecondModal = () => {
        setIsSecondModalOpen(false);
    };

    const Submissions =({submission }) => (
        <div className="flex flex-row justify-between p-2 text-sm">
            <div className="flex flex-col">
                <h1>{submission.topic}</h1>
                <p className="text-green-500">{submission.status}</p>
            </div>
            <div className="w-16 md:w-72"></div>
            <div className={`flex justify-center items-center p-2 bg-green-500 ${submission.score === 'Not Submitted' ? 'bg-red-300 text-red-900' : 'bg-green-300 text-green-900'}`}>
                {submission.score}
            </div>
        </div>
    );

    return(
        <>
            <div className="m-5"> 
                <h1 className="text-2xl font-bold mb-10">Assignments</h1>
            
                <div className="flex flex-wrap gap-10 justify-between items-start">

                    <div className="flex flex-col border-1 md:max-w-md rounded-md p-5">
                        <h1 className="text-2xl font-bold">How to Make an Array and its types in C++</h1>
                        <div className="text-sm text-gray-400 space-y-2">
                            <p>Course: Frontend Development</p>
                            <p>Created: Mon 20 May, 2024</p>

                            <div className="text-red-700 flex flex-row items-end">
                                <p>Deadline: </p>
                                <p className="flex flex-row px-4 items-center"><BsCalendarDateFill className="mr-1"/> 20-06-2024 </p>
                                <p className="flex flex-row items-center"> <IoMdTime className="mr-1" /> 01:30pm</p>
                            </div>
                            <p>Questions: 50</p>
                            <p>Marks: 50</p>
                        </div>

                         
                        <button onClick={openFirstModal} className="border-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-md p-2 my-5" >Open</button>
                            <Modal isOpen={isFirstModalOpen}  onClose={closeFirstModal} size="4xl" className="h-full">
                                <ModalContent>
                                    <>
                                    <ModalHeader className="flex flex-col gap-1">
                                        <h1 className="text-2xl font-bold mb-10 ">Assignments</h1>
                                    </ModalHeader>
                                    <ModalBody>
                                        <div className="flex flex-col border-2 rounded-md p-2">
                                            <h1 className="text-2xl font-bold my-5">How to Make an Array and its types in C++</h1>
                                            <div className="text-sm text-gray-400 space-y-2">
                                                <p>Course: Frontend Development</p>
                                                <p>Created: Mon 20 May, 2024</p>
                                                <div className="text-red-700 flex flex-row items-end">
                                                    <p>Deadline: </p>
                                                    <p className="flex flex-row px-4 items-center"><BsCalendarDateFill className="mr-1"/> 20-06-2024 </p>
                                                    <p className="flex flex-row items-center"> <IoMdTime className="mr-1" /> 01:30pm</p>
                                                </div>
                                                <p>Questions: 50</p>
                                                <p>Marks: 50</p>
                                            </div>
                                            <div className="border-1 p-2 text-sm flex rounded-md my-3 max-w-fit">
                                                <GrDownload className="mr-3" />
                                                <DownloadFile
                                                    apiUrl="http://localhost:8080/download"
                                                    fileName="New Asignment.txt"
                                                />
                                            </div>
                                            <p className="my-10"><span className="font-semibold">Note: </span>Assignments should be submitted in PDF format, Github URL or Figma Links.</p>
                                        </div>
                                    </ModalBody>
                                    </>
                                </ModalContent>
                            </Modal>

                            <button onClick={openSecondModal} className="border-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-md p-2">Submit Assignments</button>
                                <Modal isOpen={isSecondModalOpen} onClose={closeSecondModal} size="4xl" className="h-full">
                                    <ModalContent>
                                        <ModalHeader className="flex flex-col gap-1">
                                            <h1 className="text-2xl font-bold mb-5 ">Assignments</h1>
                                        </ModalHeader>
                                        <ModalBody>
                                            <div className="flex flex-col  border-1 rounded-md space-y-5 p-5">
                                                <h1 className="text-2xl font-bold">How to Make an Array and its types in C++</h1>
                                                <div className="text-sm text-gray-400 space-y-2">
                                                    <p>Course: Frontend Development</p>
                                                    <p>Created: Mon 20 May, 2024</p>
                                                    <div className="text-red-700 flex flex-row items-end">
                                                        <p>Deadline: </p>
                                                        <p className="flex flex-row px-4 items-center"><BsCalendarDateFill className="mr-1"/> 20-06-2024 </p>
                                                        <p className="flex flex-row items-center"> <IoMdTime className="mr-1" /> 01:30pm</p>
                                                    </div>
                                                    <p>Questions: 50</p>
                                                    <p>Marks: 50</p>
                                                    <Input 
                                                        type="url"
                                                        placeholder="Figma Link"
                                                        variant="bordered"
                                                        className="max-w-xs"
                                                    />
                                                    <div className="flex flex-wrap md:flex-row items-center">
                                                         <UploadFile apiUrl="http://localhost:8080/upload" /> 
                                                    
                                                            {/* <input
                                                            className="visible text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer p-1 mr-5 max-w-xs"
                                                            type="file"
                                                            id="files"
                                                            multiple
                                                            placeholder="upload"
                                                            >
                                                            </input>  */}
                                                        
                                                        <Input
                                                            type="url"
                                                            placeholder="Github URL"
                                                            variant="bordered"
                                                            className="max-w-xs"
                                                        />
                                                    </div>
                                                    
                                                    {/* <ModalFooter className="justify-start -mx-7 w-90"> */}
                                                        <button className="border-1 p-2 rounded-md w-90 bg-blue-700 text-white" type="submit" >
                                                            Submit
                                                        </button>
                                                    {/* </ModalFooter> */}
                                                </div>
                                            </div>
                                        </ModalBody>
                                    </ModalContent>
                                </Modal>

                    </div>

                    <div className="flex flex-col justify-between max-w-90">
                        <h1>Recent Assignments</h1>
                        <hr/>
                        <div>
                            {submissions.map((submissions, index)=>(
                                <Submissions key={index} submission={submissions}/>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Assignment;


  

import { MdOutlineSchool, MdSchool } from 'react-icons/md';
import { PiBooks, PiBooksFill, PiExam, PiExamBold, PiExamFill, PiCertificate, PiCertificateBold, PiCertificateFill} from 'react-icons/pi'
import { BiCategory, BiSolidCategory } from 'react-icons/bi';

const menuItems = () => [
    {
        path:"/aulaosha",
        name:"Dashborad",
        iconWhite: <BiCategory color='white' style={{ width:25, height:25 }} />,
        iconFill: <BiSolidCategory color='white' style={{ width:25, height:25 }} />,
    },
    {
        path:"/aulaosha/programas",
        name:"Programas",
        iconWhite: <PiBooks color='white' style={{ width:25, height:25 }} />,
        iconFill: <PiBooksFill color='white' style={{ width:25, height:25 }} />,
    },
    {
        path:"/aulaosha/examenes",
        name:"Exámenes",
        iconWhite: <PiExam color='white' style={{ width:25, height:25 }} />,
        iconFill: <PiExamFill color='white' style={{ width:25, height:25 }} />,
    },
    {
        path:"/aulaosha/notas",
        name:"Notas",
        iconWhite: <MdOutlineSchool color='white' style={{ width:25, height:25 }} />,
        iconFill: <MdSchool color='white' style={{ width:25, height:25 }} />,
    },
    {
        path:"/aulaosha/certificados",
        name:"Certificados",
        iconWhite: <PiCertificate color='white' style={{ width:25, height:25 }} />,
        iconFill: <PiCertificateFill color='white' style={{ width:25, height:25 }} />,
    },
];

export default menuItems;
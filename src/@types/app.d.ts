interface App {
    sonething: any
}
interface LoginReq{
    id: string;
}

interface LoginResponse {
    id: string
    firstName: string
    lastName: string
    phone: string
    email: string
    first_score:string
    city: City
    state: State
    college: College
    department: Department
    dob: any
    role: string
    oldUserId: number
    image: string
    rollNumber: string
  }
 
interface City {
    id: number
  }
  
interface State {
    id: number
  }
  
interface College {
    id: number
  }
  
interface Department {
    id: number
  }
  
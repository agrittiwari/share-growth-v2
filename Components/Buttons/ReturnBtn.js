import Link from "next/link"
import btn from './Button.module.css'


export const BackToDashboard = () =>
{
    return(<Button className={btn.returnBtn}> <Link to="/">Back to Dashboard</Link></Button>)
}
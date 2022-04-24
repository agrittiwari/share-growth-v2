import Link from "next/link"
import btn from './Button.module.css'


export const BackToDashboard = () =>
{
    return(<button className={btn.returnBtn}> <Link href="/dashboard">Back to Dashboard</Link></button>)
}
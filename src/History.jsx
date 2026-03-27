import './History.css';

export default function History({git}){
    return(
        <div className='git-container'>
            <h1 className="title">{git.repo.name}</h1>
            <p className="subheadr1"> Reference: {git.payload.ref}</p>
            <p className="subheader2"> Date: {git.created_at}</p>
        </div>
    )
}
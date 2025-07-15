export default function App() {
    const people=[
        {id:1,name:"Kiran",age:30},
        {id:2,name:"Akatsuki",age:32},
        {id:3,name:"Itachi",age:34},
        {name:"Mahi",age:40,id:5},
        {name:"Akira",age:32},
        {age:50,name:"Ivanka"}
    ];
  return (<>
      <h1>People List</h1>
      <ul>
          {
              people.map(person=>(
                  <li key={person.id}>{person.name}-Age:{person.age}</li>
              ))
          }
      </ul>
  </>);
}

//Output
//Kiran-Age:30
//Akatsuki-Age:32
//Itachi-Age:34
//Mahi-Age:40
//Akira-Age:32
//Ivanka-Age:50

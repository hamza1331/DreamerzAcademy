const courses ={
    general:[
        {ID:'GEN1001',title:'GEN course 1',subtitle:'THis is a test subtitle to check the working and layout of the card design',image:('./online.jpg'),enrolled:false},
        {ID:'GEN1002',title:'GEN course 2',subtitle:'THis is a test subtitle to check the working and layout of the card design',image:'https://dt9ph4xofvj87.cloudfront.net/user/themes/live_academies/images/courses/web-development/slider-card.png',enrolled:false},
        {ID:'GEN1003',title:'GEN course 3',subtitle:'THis is a test subtitle to check the working and layout of the card design',image:import('./online.jpg'),enrolled:false}
    ],
    prog:[
    {ID:'PRG1001',title:'PROG course 1',subtitle:'THis is a test subtitle to check the working and layout of the card design',image:import('./online.jpg'),enrolled:false},
    {ID:'PRG1002',title:'PROG course 2',subtitle:'THis is a test subtitle to check the working and layout of the card design',image:import('./online.jpg'),enrolled:false},
    {ID:'PRG1003',title:'PROG course 3',subtitle:'THis is a test subtitle to check the working and layout of the card design',image:import('./online.jpg'),enrolled:false}
    ],
    prod:[
        {ID:'PRD1001',title:'PROD course 1',subtitle:'THis is a test subtitle to check the working and layout of the card design',image:import('./online.jpg'),enrolled:false},
        {ID:'PRD1002',title:'PROD course 2',subtitle:'THis is a test subtitle to check the working and layout of the card design',image:import('./online.jpg'),enrolled:false},
        {ID:'PRD1003',title:'PROD course 3',subtitle:'THis is a test subtitle to check the working and layout of the card design',image:import('./online.jpg'),enrolled:false}
    ],
    photo:[
        {ID:'PHT1001',title:'PHOTO course 1',subtitle:'THis is a test subtitle to check the working and layout of the card design',image:import('./online.jpg'),enrolled:false},
        {ID:'PHT1002',title:'PHOTO course 2',subtitle:'THis is a test subtitle to check the working and layout of the card design',image:import('./online.jpg'),enrolled:false},
        {ID:'PHT1003',title:'PHOTO course 3',subtitle:'THis is a test subtitle to check the working and layout of the card design',image:import('./online.jpg'),enrolled:false}
    ]
}
{/*
photo.forEach((ph)=>{
	result.push( courses.photo.filter(data=>{
		return data.ID===ph
    }))
})
*/}
// console.log(courses)
export default courses
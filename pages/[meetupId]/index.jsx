import MeetupDetail from "../../components/meetups/MeetupDetail"

function MeetupDetails(){
  return(
    <>
      <MeetupDetail
        title='titulo'
        address='endereço'
        image="https://static.independent.co.uk/2023/03/07/15/newFile-3.jpg"
        description='decrição'
      />
    </>
  )
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup',
      },
    },
  };
}




export default MeetupDetails
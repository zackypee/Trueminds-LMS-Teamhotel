import TeamCard from "../../../../components/adminComponents/TeamCard";

export const usersData = [
  { id: 1, name: "Babalola Zainab", email: "dave@mail.com", role: "UI/UX", team: "Product", isActive:true , img:"/images/zainab-img.svg" },
  { id: 2, name: "Fadeyi Olamide", email: "jane@mail.com", role: "Backend Developer", team: "Engineering", isActive:true, img:"/images/olamide-img.svg"  },
  { id: 3, name: "Olarotimi Blessing", email: "jane@mail.com", role: "Graphic Designer", team: "", isActive: false, img:"/images/blessing-img.svg" },
  { id: 4, name: "David Chen", email: "anna@mail.com", role: "Growth Intern", team: "Marketing", isActive:true, img:"/images/david-img.svg"   },
  { id: 5, name: "Dave", email: "dave@mail.com", role: "UI/UX", team: "Product", isActive:true, img:"/images/blessing-img.svg" },
  { id: 6, name: "Jane", email: "jane@mail.com", role: "Backend Developer", team: "Engineering", isActive:true, img:"/images/zainab-img.svg" },
  { id: 7, name: "Sam", email: "sam@mail.com", role: "Frontend Developer", team: "Engineering", isActive:true, img:"/images/david-img.svg" },
  { id: 8, name: "Lisa", email: "lisa@mail.com", role: "Graphic Designer", team: "Design", isActive:true, img:"/images/olamide-img.svg" },
  { id: 9, name: "Tom", email: "tom@mail.com", role: "Graphic Designer", team: "Design", isActive:true, img:"/images/zainab-img.svg" },
  { id: 10, name: "Anna", email: "anna@mail.com", role: "Content Writer", team: "Marketing", isActive:true, img:"/images/olamide-img.svg"   },
  { id: 11, name: "Mark", email: "mark@mail.com", role: "Project Manager", team: "Product", isActive:true, img:"/images/olamide-img.svg"   },

];

const TeamOverview = () => {

   const teamMembers = usersData.reduce((acc, user) => {
    if (user.team && !acc[user.team]) {
      acc[user.team] = [];
    }
    if(user.team){
      acc[user.team].push(user);
    }
    return acc;
  }, {});

  return (
    <section className="team-overview mt-10 mb-10">
      <h2 className="text-[14px] text-[#455F87] leading-5.25 font-semibold mb-4">Team Overview</h2>
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-4 gap-4">
        {Object.entries(teamMembers).map(([teamName, members]) => (
          <TeamCard key={teamName} teamName={teamName} members={members} />
        ))}
      </div >
    </section>
  )
}

export default TeamOverview;
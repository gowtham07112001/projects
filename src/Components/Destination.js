import "../Components/Destination.css";
import DestinationData from "./DestinationData";

function Destination() {
  return (
    <>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, Within a time frame.</p>
      </div>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="One Of the most iconic views in Luzon,Mt Taal Boasts a Volcano inside a lake an island.if you fancy a colser look,the hike up to the crater is a mere 45 minutes,and is easy enough for beginners.Guides will assist you most of the way,and you'll see the pecuilar environment found on an active volcano,including volcanic rocks and stream vents.The hike can be dusty and hot,So plan for an early Morning trip,and then unwind with some bulalo before heading back home!"
        img1="https://images.unsplash.com/photo-1469443168033-4623821959af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
        img2="https://images.unsplash.com/photo-1600298882438-de4298571be4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt.daguldul,Batangas"
        text="If you're looking for a hike that a little more challenhing but Wondering how to get started in environmental photography? Learn today from our experts. Acquire a decolonized perspective on how to tell environmental and conservation stories. Photojournalism. Ethical Photography. Non-profit. Wildlife Photography.an island.if you fancy a colser look,the hike up to the crater is a mere 45 minutes,and is easy enough for beginners.Guides will assist you most of the way,and you'll see the pecuilar environment found on an active volcano,including volcanic rocks and stream vents.The hike can be dusty and hot,So plan for an early Morning trip,and then unwind."
        img1="https://images.unsplash.com/photo-1673911673282-fd679c365356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        img2="https://images.unsplash.com/photo-1576542260349-626bf55262a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      />
    </>
  );
}

export default Destination;

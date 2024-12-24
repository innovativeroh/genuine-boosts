import Header from "@/components/core/header";
import PostHeader from "@/components/core/postheader";
import Navigation from "@/components/core/navigation";

const combiner = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] m-auto p-4">
        <PostHeader />
        <Navigation />
      </div>
    </>
  )
}

export default combiner
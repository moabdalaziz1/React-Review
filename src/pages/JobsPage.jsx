import JobsListing from '../components/JobListings';

const JobsPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-6">
      <JobsListing isHome={false} />
    </section>
  );
};

export default JobsPage;

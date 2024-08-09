import React from 'react';
import MainCard from '../components/cards/MainCard';
import DummyTable from '../components/table';
import MainLayout from '../Lay/MainLayout';
import ChartBreadcrumbs from '../components/TableTobBreadCrumbstab';

const Page = () => {
  return (
    <MainLayout><ChartBreadcrumbs   title="Nutrition Table" breadcrumbText="home/table"/>
      <MainCard sx={{ width: '90%', margin: '0 auto' }}>
        <DummyTable />
      </MainCard>
    </MainLayout>
  );
};

export default Page;

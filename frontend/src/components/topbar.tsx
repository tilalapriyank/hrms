function Topbar() {
  return (
    <>
      <div className="topbar flex items-center justify-between pb-6">
        <h2 className="text-h6 text-heading font-bold">Dashboard</h2>
        <div className="topbar-right">
          <div className="topbar-action flex items-center gap-2">
            <button className="btn-primary">Total employee 50</button>
            <button className="btn-outline">Apply leave</button>
            <button className="btn-primary">Add Employee</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar
import React from 'react'

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className='card'>
      {React.createElement('p',{className:"free text-center"},"FREE")}
      {React.createElement('h3',{className:"price-1 text-center"},"$0/month")}
      {React.createElement('hr')}
      {React.createElement('ul',{className:"package1"},
      React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Single User'),
      React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'50GB Storage'),
      React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Unlimited Public Projects'),
      React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Community Access'),
      React.createElement('li',{className:"listitem text-muted"},<i class="fa fa-times" aria-hidden="true"></i>,'Unlimited Private Projects'),
      React.createElement('li',{className:"listitem text-muted"},<i class="fa fa-times" aria-hidden="true"></i>,'Dedicated Phone Support'),
      React.createElement('li',{className:"listitem text-muted"},<i class="fa fa-times" aria-hidden="true"></i>,'Free Subdomain'),
      React.createElement('li',{className:"listitem text-muted"},<i class="fa fa-times" aria-hidden="true"></i>,'Monthly Status Reports')
      )}
      {React.createElement('button',{className:"btn btn-primary btn-lg"},"BUTTON")}
    </div>
    </div>

    <div className="col-md-6 col-lg-4">
    <div className='card'>
    {React.createElement('p',{className:"free text-center"},"PLUS")}
    {React.createElement('h3',{className:"price-1 text-center"},"$9/month")}
    {React.createElement('hr')}
    {React.createElement('ul',{className:"package1"},
    React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Single User'),
    React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'50GB Storage'),
    React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Unlimited Public Projects'),
    React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Community Access'),
    React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Unlimited Private Projects'),
    React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Dedicated Phone Support'),
    React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Free Subdomain'),
    React.createElement('li',{className:"listitem text-muted"},<i class="fa fa-times" aria-hidden="true"></i>,'Monthly Status Reports')
    )}
    {React.createElement('button',{className:"btn btn-primary btn-lg "},"BUTTON")}
  </div>
  </div>
  

  <div className="col-md-6 col-lg-4">
  <div className='card'>
  {React.createElement('p',{className:"free text-center"},"PRO")}
  {React.createElement('h3',{className:"price-1 text-center"},"$49/month")}
  {React.createElement('hr')}
  {React.createElement('ul',{className:"package1"},
  React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Single User'),
  React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'50GB Storage'),
  React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Unlimited Public Projects'),
  React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Community Access'),
  React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Unlimited Private Projects'),
  React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Dedicated Phone Support'),
  React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Free Subdomain'),
  React.createElement('li',{className:"listitem"},<i class="fa fa-check" aria-hidden="true"></i>,'Monthly Status Reports')
  )}
  {React.createElement('button',{className:"btn btn-primary btn-lg"},"BUTTON")}
</div>
</div>

</div>
</div>
  )
}

export default Home
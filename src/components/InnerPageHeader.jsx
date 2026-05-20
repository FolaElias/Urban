import TransitionLink from './TransitionLink'

export default function InnerPageHeader({ title, subtitle, breadcrumb, number, image }) {
  return (
    <div className="inner-page-header">
      {/* Background image */}
      <div className="iph-bg">
        <img src={image} alt={title} />
        <div className="iph-gradient" />
      </div>

      {/* Content */}
      <div className="iph-content">
        <div className="iph-number">{number}</div>
        <div className="iph-text">
          <h1 className="iph-title">{title}</h1>
          {subtitle && <p className="iph-subtitle">{subtitle}</p>}
        </div>
      </div>

      {/* Breadcrumb badge */}
      <div className="iph-breadcrumb">
        <TransitionLink to="/" className="iph-bc-link">Home</TransitionLink>
        <span className="iph-bc-sep">/</span>
        <span className="iph-bc-current">{breadcrumb || title}</span>
      </div>
    </div>
  )
}

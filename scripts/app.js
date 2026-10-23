const projects = document.querySelector('#projects');
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const externalLink = link => `<a href="${escapeHTML(link.url)}">${escapeHTML(link.label)} <svg class="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true" focusable="false"><path d="M3 21 21 3M12 3h9v9"/></svg></a>`;
async function loadPortfolio(){
 const response = await fetch('data/portfolio.json');
 if(!response.ok) throw new Error('Content unavailable');
 const portfolio = await response.json();
 projects.innerHTML = portfolio.projects.map((p,i)=>`<details class="project"><summary><h3>${escapeHTML(p.title)}</h3><span class="project-area">${escapeHTML(p.category)}</span><span class="expand-icon" aria-hidden="true"></span></summary><div class="project-detail">${p.status?`<p class="project-status">${escapeHTML(p.status)}</p>`:''}${p.image?`<img class="project-image" src="${escapeHTML(p.image)}" alt="${i===0?'CareNav synthetic demo with cited answers and source evidence':'Audition With Me script upload and rehearsal interface'}" width="2048" height="1284" loading="lazy">`:''}${p.description.map(d=>`<p>${escapeHTML(d)}</p>`).join('')}<p class="tags">${p.tags.map(escapeHTML).join(' · ')}</p><div class="project-links">${p.links.map(externalLink).join('')}</div></div></details>`).join('');
 document.querySelector('#timeline').innerHTML = portfolio.experience.map(e=>`<article class="timeline-entry"><span class="timeline-date">${escapeHTML(e.date)}</span><div><h3>${escapeHTML(e.company)}</h3><p class="role">${escapeHTML(e.role)}</p><p class="description">${escapeHTML(e.description)}</p></div></article>`).join('');
}
loadPortfolio().catch(()=>{projects.innerHTML='<p>Projects couldn’t load. Please refresh, or <a href="https://github.com/poornanat1">explore my work on GitHub</a>.</p>';document.querySelector('#timeline').textContent='Experience couldn’t load. Please refresh to try again.';});

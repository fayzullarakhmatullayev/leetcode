function subdomainVisits(cpdomains: string[]): string[] {
  const map: Map<string, number> = new Map();

  for (const cpdomain of cpdomains) {
    const visitedCount = cpdomain.split(' ')[0];
    const domains = cpdomain.split(' ')[1].split('.');
    let domaintext = '';

    for (let i = domains.length - 1; i >= 0; i--) {
      const domain = domains[i];
      if (domaintext === '') {
        domaintext = domain;
      } else {
        domaintext = domain + '.' + domaintext;
      }

      map.set(domaintext, (map.get(domaintext) || 0) + Number(visitedCount));
    }
  }

  const answer: string[] = [];

  for (const [key, value] of map.entries()) {
    answer.push(`${value} ${key}`);
  }

  return answer;
}

console.log(subdomainVisits(['9001 discuss.leetcode.com'])); // ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
console.log(
  subdomainVisits(['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'])
); // ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
console.log(
  subdomainVisits(['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'])
); // ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]

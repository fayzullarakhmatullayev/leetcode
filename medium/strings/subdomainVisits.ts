function subdomainVisits(cpdomains: string[]): string[] {
  const domainCountMap: Map<string, number> = new Map();

  for (const cpdomain of cpdomains) {
    const [countStr, fullDomain] = cpdomain.split(' ');
    const domainParts = fullDomain.split('.');
    let currentSubdomain = '';

    for (let i = domainParts.length - 1; i >= 0; i--) {
      const part = domainParts[i];
      if (currentSubdomain === '') {
        currentSubdomain = part;
      } else {
        currentSubdomain = part + '.' + currentSubdomain;
      }

      domainCountMap.set(
        currentSubdomain,
        (domainCountMap.get(currentSubdomain) || 0) + Number(countStr)
      );
    }
  }

  const result: string[] = [];

  for (const [subdomain, count] of domainCountMap.entries()) {
    result.push(`${count} ${subdomain}`);
  }

  return result;
}

console.log(subdomainVisits(['9001 discuss.leetcode.com'])); // ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
console.log(
  subdomainVisits(['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'])
); // ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
console.log(
  subdomainVisits(['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'])
); // ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]

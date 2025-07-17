
interface OfficeSectionProps {
  country: string;
  flag: React.ReactNode;
  address: string;
  email: string;
}

export const OfficeSection = ({ country, flag, address, email }: OfficeSectionProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        {flag}
        <h3 className="text-white font-bold text-lg">{country}</h3>
      </div>
      <div className="space-y-2 text-gray-300 text-sm">
        <p className="text-gray-400 mb-3" dangerouslySetInnerHTML={{ __html: address }} />
        <a href={`mailto:${email}`} className="text-white hover:text-gray-300 transition-colors">{email}</a>
      </div>
    </div>
  );
};

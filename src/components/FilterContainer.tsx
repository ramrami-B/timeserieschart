import { colors } from '@/constants/colors';

interface FilterContainerProps {
  filter: string;
  setFilter: any;
}

const FilterContainer = ({ filter, setFilter }: FilterContainerProps) => {
  const handlerClickFilter = (region: string) => {
    setFilter(region);
  };

  const regionList = ['ALL', '강남구', '노원구', '성북구', '중랑구'];

  return (
    <div className="buttons">
      {regionList.map((region, idx) => (
        <button
          key={idx}
          className={filter === region ? 'active' : 'inactive'}
          onClick={() => handlerClickFilter(region)}
        >
          {region}
        </button>
      ))}
      <style jsx>{`
        .buttons {
          display: flex;
        }
        .buttons button {
          border-radius: 10px;
          padding: 0.5rem;
          border: solid 0.5px ${colors.light};
          outline: none;
        }
        .active {
          color: ${colors.black};
          background: ${colors.light};
        }
        .inactive {
          background: ${colors.white};
        }
      `}</style>
    </div>
  );
};

export default FilterContainer;

import { IPlayerUserForm } from '@/types/coachLecture';
import UserFormCard from '../UserFormCard/UserFormCard';
import NoFormList from '../NoFormList/NoFormList';

interface IUserFormListProps {
  lectureForms: IPlayerUserForm[];
}

const UserFormList = ({ lectureForms }: IUserFormListProps) => {
  return (
    <ul>
      {lectureForms.length ? (
        <>
          {lectureForms?.map((userForm) => (
            <UserFormCard key={userForm.id} formId={userForm.id} userForm={userForm} />
          ))}
        </>
      ) : (
        <NoFormList />
      )}
    </ul>
  );
};

export default UserFormList;

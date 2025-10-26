import { useContext } from "react";
import { ServiceContext } from "../../contexts/ServiceContext";
import ServiceRow from "./ServiceRow";

export default function ServicesList() {
  const { services } = useContext(ServiceContext);

  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {services.map(({ id, name, description }) => (
          <ServiceRow key={id} id={id} name={name} description={description} />
        ))}
      </tbody>
    </table>
  );
}

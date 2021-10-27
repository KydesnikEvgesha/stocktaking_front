import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Table, Space, Button } from "antd";
import locationActions from "../../store/Location/actions";
import { LocationSelectors } from "store/Location";
import { Location } from "store/Location/types";

const columns = [
  {
    title: "NameOffice",
    dataIndex: "nameOffice",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Действия",
    key: "action",
    render: (record: Location) => {
      const dispatch = useDispatch();
      const DeleteLocationHandler = (id: number) => {
        dispatch(locationActions.deleteLocation({ id }));
      };

      return (
        <Space size="middle">
          <Button>Редактировать</Button>
          <Button danger onClick={() => DeleteLocationHandler(record.id)}>
            Удалить
          </Button>
        </Space>
      );
    },
  },
];

const LocationProfiles = () => {
  const dispatch = useDispatch();

  const locations = useSelector(LocationSelectors.locations);

  const fetchUserProfiles = useCallback(() => {
    dispatch(locationActions.getLocations());
  }, [dispatch]);

  useEffect(() => {
    fetchUserProfiles();
  }, [fetchUserProfiles]);

  return <Table columns={columns} dataSource={locations} />;
};

function LocationPage() {
  return <LocationProfiles />;
}

export default LocationPage;

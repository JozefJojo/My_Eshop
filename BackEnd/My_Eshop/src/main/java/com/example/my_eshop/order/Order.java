package com.example.my_eshop.order;

import com.example.my_eshop.orderline.Orderline;
import com.example.my_eshop.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;


@Data
@Entity
@Table(name = "o_rder")
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public Integer id;

    @Column(name = "created")
    public String created = new Date().toString();

    @Column(name = "status")
    public String status = "PROCESSED";


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

//    @OneToMany(mappedBy = "order")
//    @JoinColumn(name="ordertoorderline_fk_1", referencedColumnName = "id")
//    private List<Orderline> orderLines;

    public Order(String created, String status, User user) {
        this.created = created;
        this.status = status;
        this.user = user;
    }
}

import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'
// import { User} from

@Entity('favorites')
export class FavoritesEntity {
  /**
   * id
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 用户id,和uersdata表一对一
   */

  
  /**
   * 文章id，和posts表一对一
   */


  /**
   * 
   */














}